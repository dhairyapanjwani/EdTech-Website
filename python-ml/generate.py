import pandas as pd
import numpy as np
from csv import writer
import random

#category, rating, video_count, comment_count, likes, score
with open('test_data.csv', 'a',newline="") as f_object:
    for i in range(10000):
        category=random.randint(1,5)
        List=[i,category,random.randint(1,5),random.randint(1,20),random.randint(1,500),random.randint(1,1000),category]
        writer_object = writer(f_object)
        writer_object.writerow(List)
    f_object.close()

