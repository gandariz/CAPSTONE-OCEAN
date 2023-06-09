![logo](https://i.postimg.cc/ZRV6XwsJ/xcw.png)
# Capstone-Project-C23-PS103 / OCEAN
# C23-PS103 
## Member
-(ML) M346DKX4122  Alif Akbar Muhammad Isra  

-(ML) M040DSX2572  Rafi Athallah 

-(ML) M181DKX3780  Raihansyah Arifin

-(CC) C346DKX4149  Muhammad Ganda Rizky

-(CC) C263DSX1381  Muhammad Abdul Azizul Hakim

-(MD) A346DKX4281  Muhammad Raihan Aufa Kamal 

## Table of Contents
- General Information
- Technologies
- Contact
- How To Deploy to GCP
- Documentation


## General Info
This is the API for our app OCEAN which stands for "Openness Conscientiousness Extraversion Agreeableness Neurotic". This API is deployed using Google Cloud Platform's App Engine service and connected to the Cloud SQL database.

## Technologies
- Node.js version : v16.14.0
- Google Cloud Platform
- SQL Database
- App Engine

## Contact
For further information you can contact:
- mgandar007@gmail.com (Muhammad Ganda Rizky)

##  How to Deploy
In order to use the endpoint, you have to deploy the API using App Engine in Google Cloud Platform. Here's how :
- Clone the project **“Captstone-OCEAN"** from repo
- Create Cloud SQL database (Cloud SQL for MySQL)
- Set up the required database
- Deploy the app in App Engine editor
- Click the generated endpoint link to test the connection

# how to use API  
## Get All Question
**Endpoint :**\
<https://[API-NAME-run.app]/q>


- Url : 
  - /q
- Method
  - GET
- Request Body
  - .body
  

## Get Question by context
<https://[API-NAME-run.app]/question/:context>


- Url : 
  - /question/:context
- Method
  - GET
- Request Body
  - .body


## EDIT question by context
<https://[API-NAME-run.app]/question/:context>


- Url : 
  - /question/:context
- Method
  - PUT
- Request Body
  - .body


## DELETE question by context
<https://[API-NAME-run.app]/question/:context>


- Url : 
  - /question/:context
- Method
  - DELETE
- Request Body
  - .params.context


## POST users
<https://[API-NAME-run.app]/question/users>


- Url : 
  - /users
- Method
  - POST
- Request Body
  - .body


## GET all users
<https://[API-NAME-run.app]/question/users>


- Url : 
  - /users
- Method
  - SELECT * FROM users
- Request Body
  - .id

## Get a user by ID
<https://[API-NAME-run.app]/users/:id>


- Url : 
  - /users/:id
- Method
  - GET
- Request Body
  - .params

## EDIT a user by ID
<https://[API-NAME-run.app]/users/:id>


- Url : 
  - /users/:id
- Method
  - UPDATE
- Request Body
  - .params
  - .body

## Delete a user by ID
<https://[API-NAME-run.app]/users/:id>


- Url : 
  - /users/:id
- Method
  - DELETE
- Request Body
  - .params

# C23-PS103 - MACHINE LEARNING Repo. (Go to `Machine Learning` folder)

## About
This is the folder for Machine Learning repo. We made a one-stop notebook `OCEAN.ipynb` (please check this out in `Machine Learning` folder) that incorporates almost all cycles of Machine Learning: data gathering, data preprocessing (including the algorithm about labeling, PCA, and K-means clustering), modeling and model training, histograms, and model saving (in HDF5 format). The outputs of the notebook are generated in the `./OCEAN` folder.


## Dataset
[This Dataset ](https://www.kaggle.com/datasets/tunguz/big-five-personality-test) contains 1.015.342 questionnaire answers collected online by Open Psychometrics. The dataset is based upon the questionnaire that is created with [IPIP model](https://ipip.ori.org/newBigFive5broadKey.htm).

## File Directories:

`/OCEAN/trainable data`

Generated by the notebook, this folder holds important pieces of data to be fed into the machine learning models. This folder incorporates the final output of the data preprocessing section in the notebook. The data that prevails in this section has already been cleaned, sorted, and labeled through the preprocessing process (namely PCA and K-means).

`./OCEAN/model`

Generated by the notebook, this folder holds the 5 saved models of machine learning in HDF5 format with each model containing a specific personality trait (in this case O – Openness, C – Conscientiousness, E – Extraversion, A – Agreeableness, and N – Neuroticism) and its converted models in .js format (saved in ` ./OCEAN/model/converted/tfjs`)

`./OCEAN/analysis`

This folder holds 5 files, which contain the statistical characteristics of labels after clustering the raw data. Each analysis contains a specific personality trait (in this case O – Openness, C – Conscientiousness, E – Extraversion, A – Agreeableness, and N – Neuroticism) and its file in csv(comma separated value) format.

## Model Reasoning:

**Clustering**

Clustering is utilized when working with raw data that lacks labels, especially in cases where the dataset is large and complex, making it impractical to label each data point individually. By applying clustering algorithms, patterns and similarities among the data points can be identified.

**Principal Component Analysis before Clustering**

Using PCA before clustering has several benefits. First, it can help to eliminate redundant or irrelevant features, which can lead to improved cluster quality and interpretability. Second, it can enhance the computational efficiency of clustering algorithms by reducing the input space. Third, it can mitigate the impact of noise and outliers in the data by focusing on the most informative dimensions.


**Different models than Multitask learning**

using different models than multitask learning because the approach involves training various models that specialize in specific areas and allowing them to leverage their strengths. Each model is trained on data that is independent and relevant to its specific domain, enabling it to make predictions or perform tasks related to that domain. This approach offers more flexibility and specialization, potentially resulting in better overall performance. By capitalizing on the strengths of each model and utilizing domain-specific data, we can achieve more accurate predictions and task performances, leading to improved outcomes in various applications.



## Machine Learning Cycles

**Preprocessing**

1. Obtaining the dataset: retrieving the dataset from the link we mentioned earlier.
2. Cleaning dataset: removing null values, invalid integers, and renaming column names.
3. Labeling the dataset: applying PCA and K-means to the unlabeled dataset.
4. Saving the labeled datasets: generating csv files, saved in 	`./OCEAN/trainable dataset`.

**Modeling and Training**

1. Making new models
2. Feeding the dataset into the untrained model
3. After training the models evaluate the model
4. If the model isn't good enough, then please follow steps 1-3. However, if the model is good enough, you can proceed to save the model in the h5 format.
5. Convert h5 models format to tensorflow js

# C23-PS103 - Mobile Development Repo.
# Mobile Development Doccumentation
The source code of Android App of OCEAN (Openness Conscientiousness Extraversion Agreeableness Neurotic) using Kotlin.

#### Features

- Splash Screen, a visually appealing screen that welcomes you to OCEAN.
- Onboarding Screen, introduces the app features and benefits.
- Login, allows a user to access an application by entering their username and password.
- Register, create an account to unlock features.
- Home, central hub for travel recommendations based on location and preferences.
- JobList, a feature to see what jobs are interesting.
- PersonalityFact, to see hot news about personality.
- Test, contains a page of general questions about personality.
- Result, complete information about personality test results. 
- Setting, user's information.

#### Dependencies
 - [Jetpack Navigation](https://developer.android.com/jetpack/androidx/releases/navigation)
 - [Lifecycle & Livedata](https://developer.android.com/jetpack/androidx/releases/lifecycle)
 - [Dagger Hilt](https://developer.android.com/training/dependency-injection/hilt-android)
 - [Retrofit 2](https://square.github.io/retrofit/)
 - [OkHttp 3](https://square.github.io/okhttp/)
 - [Glide](https://github.com/bumptech/glide)
 - [Android Gif Drawable](https://github.com/koral--/android-gif-drawable)
 - [Expandable Text View](https://github.com/glailton/ExpandableTextView)
 - [Firebase](https://firebase.google.com/docs/android/setup)

### Screenshots
![UI_OCEAN](https://github.com/Raihankamal/OCEAN-Bangkit-Capstone-2023/blob/main/UI_OCEAN.png?raw=true)

## Installation
[MD Branch](https://github.com/Raihankamal/OCEAN-Bangkit-Capstone-2023)

If you want to more about the project, click [MD Branch](https://github.com/Raihankamal/OCEAN-Bangkit-Capstone-2023) and you can clone this repository or directly download the .zip files, then open the file in Android Studio (preferably). 
#### Prequisites (as this project made with these tools):

- Android Studio Electric Eel 2022.1.1
- Kotlin 1.9.0
- Gradle 7.3.1
- JDK 11

###### *If the application crashes, that means we turn off the API. Please contact my team or me. Thanks.
