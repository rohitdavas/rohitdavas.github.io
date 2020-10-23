# <u>Project</u> : A Fast Background Subtraction model

<u>[Home](https://rohitdavas.github.io/) 	[Resume](https://rohitdavas.github.io/resume/Rohit_Kumar.pdf)	[davarohit@gmail](https://mail.google.com/mail/u/0/?view=cm&fs=1&to=davasrohit@gmail.com&tf=1)</u>  

[TOC]

## <u>Description</u>

Specifically for the case of static camera, the background is going to remain same ( apart from several affects like wind, light, etc. ) but the objects might change. The task is to develop a deep learning based background subtraction model that performs the task. 

- The need for background subtraction and making it's extremely fast is inherent for many applications. 
- The model must generalize to the objects it have not seen before given the background image. 

- **Target:** ==*Should Run at 200fps with a batch of 10*==

( more to be added )

## A checklist of challenges in Background Subtraction 

- [ ] Illumination Changes  -  even in static scenes, lightning changes is a problem.
- [ ] Dynamic background - not applicable for the case of static scenes
- [ ] Camera Jitter 
- [ ] Camouflage -  similar colors of background and foreground 
- [ ] Night vides - As most pixels have a similar color in a night scene, recognition of foreground objects and their contours is difficult
- [ ] Ghost/ Intermittent Object motion -  Foreground objects that are embedded into the background scene and start moving after background initialization are the so-called ghosts.
- [ ] Hard Shadows - Dark, moving shadows that do not fall under the illumination change category

## <u>Literature Survey</u>

------

- There are classic algorithms like KNN, MOG but they are quite sensitive. 

- An excellent resource of the field is this [website](https://sites.google.com/site/backgroundsubtraction/Home?authuser=0) 

  - Book : The same website has this book : *Background modeling and Foreground Detection for video surveillance:  Traditional and Recent Approaches, Benchmarking and Evaluation* which gives a good review of field

- A list of top researches -

  | Top Researches |                          Paper link                          |                     Source Code                     |
  | :------------: | :----------------------------------------------------------: | :-------------------------------------------------: |
  |    FgSegNet    | [Paper](https://www.sciencedirect.com/science/article/abs/pii/S0167865518303702) |  [Github](https://github.com/lim-anggun/FgSegNet)   |
  |   FgSegNetV2   |          [Paper](https://arxiv.org/abs/1808.01477)           | [Github](https://github.com/lim-anggun/FgSegNet_v2) |
  
  The above mentioned models are quite big and hence we can't expect them to be much fast. 
  
- A list of efficient models - 

  - since my target is to build a fast model, here is a list of papers in which model is not too deep, and results are good. The speed required varies with the use case.  

    

  | Paper name                                                   | links                                         | source code |
  | ------------------------------------------------------------ | --------------------------------------------- | ----------- |
  | A Deep Convolutional Neural Network for Background Subtraction | [paper](https://arxiv.org/pdf/1702.01731.pdf) | None        |
  |                                                              |                                               |             |
  |                                                              |                                               |             |

  

- **Datasets - Human Activities** 
  
  - There are nearly 31 datasets available for background subtraction divided into three categories - Article, Conference, Project. A list of those can be found [here](https://sites.google.com/site/backgroundsubtraction/test-sequences/human-activities?authuser=0)
  
- There are datasets also available for animal activities
  
- **Available Implementations : Deep learning based**

  - A list of those can be found [here](https://sites.google.com/site/backgroundsubtraction/test-sequences/human-activities?authuser=0)  

- Others

  - [Awesome Background Subtraction Githhub](https://github.com/murari023/awesome-background-subtraction/blob/master/README.md) 

  - A basic tutorial from [OpenCv-1](https://github.com/murari023/awesome-background-subtraction/blob/master/README.md) , [OpenCv-2](https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_video/py_bg_subtraction/py_bg_subtraction.html) 

    

## <u>Implementation</u>

------

- After literature survey, I found a dataset from the dataset list to start with and that suits my need. It was the [GroundTruthSequence dataset of 500 images](http://www.cs.cmu.edu/~yaser/new_backgroundsubtraction.htm) 

- I will be writing code in PyTorch.

### <u>Data Pipeline</u>

------

- A custom data pipeline in PyTorch. This [blog](https://pytorch.org/tutorials/beginner/data_loading_tutorial.html) is a great resource to start with. 











### .... to be continued. 



------

# <u>End</u>

[Home](https://rohitdavas.github.io/) 	[Resume](https://rohitdavas.github.io/resume/Rohit_Kumar.pdf)	[davarohit@gmail](https://mail.google.com/mail/u/0/?view=cm&fs=1&to=davasrohit@gmail.com&tf=1)	[top](#<u>Project</u> : A Fast Background Subtraction model) 