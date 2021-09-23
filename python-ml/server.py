# from http.server import BaseHTTPRequestHandler, HTTPServer
# import time
# import json

# hostName = "localhost"
# serverPort = 5000

# class MyServer(BaseHTTPRequestHandler):
#     def _set_headers(self):
#         self.send_response(200)
#         self.send_header('Content-type', 'application/json')
#         self.end_headers()
#     def do_GET(self):
#         self.send_response(200)
#         self.send_header('Content-type', 'application/json')
#         self.wfile.write(json.dumps({'hello': 'world', 'received': 'ok'}))
#         self.end_headers()
#         # self.wfile.write(bytes("<html><head><title>https://pythonbasics.org</title></head>", "utf-8"))
#         # self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
#         # self.wfile.write(bytes("<body>", "utf-8"))
#         # self.wfile.write(bytes("<p>"+str(model().to_numpy())+"</p>", "utf-8"))
#         # self.wfile.write(bytes("</body></html>", "utf-8"))
#     def do_POST(self):
#         self._set_headers()
#         self.wfile.write(json.dumps({'data':'hello'}))
        

def model():
    import numpy as np
    import matplotlib.pyplot as plt
    import pandas as pd
    dataset = pd.read_csv('Market_Basket_Optimisation.csv', header=None)
    transactions = []
    for i in range(0, 7501):
        transactions.append([str(dataset.values[i, j]) for j in range(0, 20)])
    from apyori import apriori
    rules = apriori(transactions = transactions, min_support = 0.003, min_confidence = 0.2, min_lift = 3, min_length = 2, max_length = 2)
    results = list(rules)

    def inspect(results):
        lhs         = [tuple(result[2][0][0])[0] for result in results]
        rhs         = [tuple(result[2][0][1])[0] for result in results]
        supports    = [result[1] for result in results]
        confidences = [result[2][0][2] for result in results]
        lifts       = [result[2][0][3] for result in results]
        return list(zip(lhs, rhs, supports, confidences, lifts))

    resultsinDataFrame = pd.DataFrame(inspect(results), columns = ['Left Hand Side', 'Right Hand Side', 'Support', 'Confidence', 'Lift'])
    print(resultsinDataFrame.nlargest(n = 10, columns = 'Lift'))
    return resultsinDataFrame.nlargest(n = 10, columns = 'Lift')

# # print(model().to_numpy())

# if __name__ == "__main__":        
#     webServer = HTTPServer((hostName, serverPort), MyServer)
#     print("Server started http://%s:%s" % (hostName, serverPort))

#     try:
#         webServer.serve_forever()
#     except KeyboardInterrupt:
#         pass

#     webServer.server_close()
#     print("Server stopped.")




from http.server import HTTPServer, BaseHTTPRequestHandler
from http import HTTPStatus
import json
import cgi

class Server(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        
    def do_HEAD(self):
        self._set_headers()
        
    # GET sends back a Hello world message
    # def do_GET(self):
    #     self._set_headers()
    #     self.wfile.write(json.dumps({'hello': 'world', 'received': 'ok'}))
    def do_GET(self):
        self._set_headers()
        response = json.dumps({'data':model().to_numpy().tolist()})
        response = bytes(response, 'utf-8')
        self.wfile.write(response)
        
    # POST echoes the message adding a JSON field
    def do_POST(self):
        ctype, pdict = cgi.parse_header(self.headers.getheader('content-type'))
        
        # refuse to receive non-json content
        if ctype != 'application/json':
            self.send_response(400)
            self.end_headers()
            return
            
        # read the message and convert it into a python dictionary
        length = int(self.headers.getheader('content-length'))
        message = json.loads(self.rfile.read(length))
        
        # add a property to the object, just to mess with data
        message['received'] = 'ok'
        
        # send the message back
        self._set_headers()
        self.wfile.write(json.dumps(message))
        
def run(server_class=HTTPServer, handler_class=Server, port=8008):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    
    print('Starting httpd on port %d...' % port)
    httpd.serve_forever()
    
if __name__ == "__main__":
    from sys import argv
    
    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()