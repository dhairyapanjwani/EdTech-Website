import pandas as pd
import numpy as np
from csv import writer
import random

#category, rating, video_count, comment_count, likes, score
with open('test_data.csv', 'a',newline="") as f_object:
    for i in range(10000):
        category=random.randint(1,5)
        rating=random.randint(1,5)
        video_count=random.randint(1,20)
        comment_count=random.randint(1,2000)
        likes=random.randint(1,3000)
        score=0
        if comment_count in range(0,400) and likes in range(0,600):    
            score=1
        elif comment_count in range(400,800) and likes in range(600,1200):
            score=2
        elif comment_count in range(800,1200) and likes in range(1200,1800):
            score=3
        elif comment_count in range(1200,1600) and likes in range(1800,2400):
            score=4
        elif comment_count in range(1600,2000) and likes in range(2400,3000):
            score=5
        else:
            score=random.randint(1,5)

        List=[i,category,rating,video_count,comment_count,likes,score]
        writer_object = writer(f_object)
        writer_object.writerow(List)
    f_object.close()

