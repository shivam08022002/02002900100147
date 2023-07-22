import React,{useEffect, useState} from 'react'
import axios from 'axios'
const Home = () => {

    useEffect(() => {

        const req = async () => {
            try {
                
                const res = await  axios({
                      method: 'post',
                      url: 'http://20.244.56.144/train/register',
                      data: {
                          "companyName": "Train Central",
                          "ownerName": "Shivam",
                          "rollNo": "2020cs147",
                          "ownerEmail": "shivam2020cs147@abesit.edu.in",
                          "accessCode":"qxrwbC"
                      }
                });
                  console.log(res)
            } catch (err) {
                console.log(err);
            }
        }
        req();
    },[])
  return (
    <div>Home</div>
  )
}

export default Home