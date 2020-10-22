------

layout: default

title: Fast Background Subtraction 

------

# Description

The need for background subtraction and making it's extremely fast is inherent for many applications.

**Target :** Run 200fps with a batch of 10  

( more to be added )



# Literature Survey

- An excellent resource of the field is this [website](https://sites.google.com/site/backgroundsubtraction/Home?authuser=0) 

- Book : The same website has this book : *Background modeling and Foreground Detection for video surveillance:  Traditional and Recent Approaches, Benchmarking and Evaluation* 

  ![img](Fast-Background%20Subtraction.assets/UFZH9xWn9jnoPB7pAeaZmvQnBEgC-jvO0Yf1Un3skphQZ695pxQm-XO_ZASVNMFWOxMBSRkLfXwVXK9HaiwKvdErt8zcyvqryaD6TYJGHvupSeuanA=w1280)

- A list of top researches

  | Top Researches |                          Paper link                          |                     Source Code                     |
  | :------------: | :----------------------------------------------------------: | :-------------------------------------------------: |
  |    FgSegNet    | [Paper](https://www.sciencedirect.com/science/article/abs/pii/S0167865518303702) |  [Github](https://github.com/lim-anggun/FgSegNet)   |
  |   FgSegNetV2   |          [Paper](https://arxiv.org/abs/1808.01477)           | [Github](https://github.com/lim-anggun/FgSegNet_v2) |
  |                |                                                              |                                                     |

- **Datasets - Human Activities** 
  - There are nearly 31 datasets available for background subtraction divided into three categories - Article, Conference, Project. A list of those can be found [here](https://sites.google.com/site/backgroundsubtraction/test-sequences/human-activities?authuser=0)
  - There are datasets also available for animal activities

- **Available Implementations : Deep learning based**

  - A list of those can be found [here](https://sites.google.com/site/backgroundsubtraction/test-sequences/human-activities?authuser=0)  

- Others

  - [Awesome Background Subtraction Githhub](https://github.com/murari023/awesome-background-subtraction/blob/master/README.md) 

  - A basic tutorial from [OpenCv-1](https://github.com/murari023/awesome-background-subtraction/blob/master/README.md) , [OpenCv-2](https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_video/py_bg_subtraction/py_bg_subtraction.html) 

    

------

# Implementation

- After literature survey, I found a dataset from the dataset list to start with and that suits my need. It was the [GroundTruthSequence dataset of 500 images](http://www.cs.cmu.edu/~yaser/new_backgroundsubtraction.htm) 
- I will be writing code in PyTorch.

## Data Pipeline

- A custom data pipeline in PyTorch. This [blog](https://pytorch.org/tutorials/beginner/data_loading_tutorial.html) is a great resource to start with. 

