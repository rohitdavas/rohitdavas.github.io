# The Data Analysis

<u>[Home](https://rohitdavas.github.io/) 	[Resume](https://rohitdavas.github.io/resume/Rohit_Kumar.pdf)	[davarohit@gmail](https://mail.google.com/mail/u/0/?view=cm&fs=1&to=davasrohit@gmail.com&tf=1)</u>  

[TOC]

## Start

Assuming the data is read in a pandas data-frame as **df.**

Take a pen and paper and while analyzing mistakes in data, note down for fixing

- [ ] ```python
  #---------------------------------------
  # identify the missing value indicator
  #----------------------------------------- 
  
  # ask the data maker what they put for missing value
  # say they put 'NA', or 'na'
  
  missing_fill = ['NA', 'na']
  df = pd.read_csv( filename, fillna = missing_fill )
  
  # now the pandas knows how to fill the missing values
  ```

  

- [ ] understand the quirks of the dataset and the potential errors

  ```python
  #-----------------------------------------------------------
  # understand the quirks of the dataset and potential errors
  #------------------------------------------------------------
  
  # some basic first steps are
  
  df.head()
  df.describe() 
  seaborn.pairplot ( df )
  df.is_null().any() ; df.is_null().sum()
  ```

  

- [ ] variable type ; continuous, ordinal , categorical, missing, censored

  ```python
  # understand manually the features
  # you can see the missing data by
  df.is_null().any()
  ```

  

- [ ] check the clear coding errors

  ```python
  # the above basic first steps should be enough
  # but you can further check
  
  for col in df.columns:
      print(f"{col} : { len( df[col].unique() )}" ) 
      
  # this will help you analyse what you expect is what the data have
  
  ```

  

- [ ] check for unit of measurements

  - [ ] histogram, bar-plot can help 

    ```python
    # analyse the scale, outlier to come for an assumption 
    df.hist()
    df.boxplot()  
    df.plot()
    
    # access the elements you are finding anamoly at using
    # df.loc [ logic ]
    
    df.loc [ df['sepal_length_cm'] < 1 ]
    df.loc [ df['petal_width_cm'].isnull() ]
    
    ```

    an example graph 

    ![boxplot](DataAnalysis.assets/boxplot.png)

    

- [ ] 



## End

[Home](https://rohitdavas.github.io/) 	[Resume](https://rohitdavas.github.io/resume/Rohit_Kumar.pdf)	[davarohit@gmail](https://mail.google.com/mail/u/0/?view=cm&fs=1&to=davasrohit@gmail.com&tf=1)	[top](#Start) 