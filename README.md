## Capstone-Project-C23-PS103-Cloud-Computing / OCEAN
## Table of Contents
- General Information
- Technologies
- Contact
- How To Deploy to GCP
- Documentation

## General Info
This is the API for our app BUSAHA which stands for "Buka dan Buat Usaha". This API is deployed using Google Cloud Platform's Cloud Run service and connected to the Cloud SQL database. This repository contains two branches:
- Main, this branch is for development and testing purposes and only run on localhost with the provided local database. credentials.json not provided.
- GCP, this branch is the one being deployed to the Cloud Run and listens to port 8080. cred.json not provided.

## Technologies
- Node.js version : v16.14.0
- Google Cloud Platform
- Firebase Auth

## Contact
For further information you can contact:
- arifbillahbill@gmail.com (Muhammad Arif Billah)


how to use API

1. POST questions Array
(https://<apiurl>/q)
  
2. GET all questions

3. GET question by context
https:/question/:context
  
4.
