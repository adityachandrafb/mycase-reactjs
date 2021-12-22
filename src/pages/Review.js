import React, { Component } from 'react'
import {Box, Container, Button, Grid} from '@material-ui/core';
import "../style-pages/review.css";
import detail1 from "../style-pages/detail1.jpg";
import { Navbar, Footer } from '../components';
import { gql, useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import LoadingSvg from "./LoadingSvg";

function Review(props) {
    //gql get review
    const GetMessage = gql`
    query MyQuery {
      Message(limit: 5, order_by: { id: desc }) {
        message
        id
        username
      }
    }
  `;

  //gql delete review
  const DeleteMessage = gql`
  mutation MyMutation($id: Int!) {
    delete_Message_by_pk(id: $id) {
      id
      message
      username
    }
  }
`;

// gql update review
const UpdateMessage = gql`
    mutation MyMutation2($id: Int!, $message: String!) {
      update_Message_by_pk(
        pk_columns: { id: $id }
        _set: { message: $message }
      ) {
        id
        message
        username
      }
    }
  `;

  //gql insert review
  const InsertMessage = gql`
    mutation MyMutation3($object: mycase_Message_insert_input!) {
      insert_mycase_Message_one(object: $object) {
        id
        message
        username
      }
    }
  `;

  //initial data
  const initialData = {
    username: "",
    message: "",
  };

  const {
    data: dataMessage,
    loading: loadingMessage,
    error: errorMessage,
  } = useQuery(GetMessage);

// logic
const [user, setUser] = useState(initialData);
const [userStatus, setUserStatus] = useState(false);
const [userBaru, setUserBaru] = useState("");
const [messageBaru, setMessageBaru] = useState("");
const clickUser = () => {
  return setUserStatus(!userStatus);
};

const [updateMessage, { loading: loadingUpdate }] = useMutation(
    UpdateMessage,
    {
      refetchQueries: [GetMessage],
    }
  );
  const [deleteMessage, { loading: loadingDelete }] = useMutation(
    DeleteMessage,
    {
      refetchQueries: [GetMessage],
    }
  );
  const [insertMessage, { loading: loadingInsert }] = useMutation(
    InsertMessage,
    {
      refetchQueries: [GetMessage],
    }
  );

  //loading
  if (loadingUpdate || loadingDelete || loadingInsert){
    return <LoadingSvg />
   }

    // menjalankan pas submit
  const onSubmitList = (e) => {
    // console.log("masuk submit", e)

    e.preventDefault();
    insertMessage({
      variables: {
        object: {
          username: user.username,
          message: user.message,
        },
      },
    });
    setUser(initialData);
  };

  // masukkan input
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //delete pesan yang sudah kita tulis
  const onDeleteItem = (idx) => {
    deleteMessage({
      variables: {
        id: idx.target.value,
      },
    });
  };

  const submitMessageBaru = (e, id) => {
    e.preventDefault();
    updateMessage({
      variables: {
        id: id,
        message: messageBaru,
      },
    });
  };
        return (
            <div>
                <div> <Navbar /> </div>
                <div> 
                <Container style={{
                    minWidth: "100%",
                    height: "auto",  
                }}>
                    <Grid container spacing={5}> 
                    <Grid item xs={12} sm={3}>
                            <div> 
                            <p className='review-text'> Your Recent Purchase</p>
                            <img className='review-pict' src={detail1} />
                            <p className='review-text2'> Butter Life</p>
                            <p className='review-text3'> For IPHONE 13 PRO MAX</p>
                            <p className='review-text3'> Rp. 329.000</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div> 
                            <p className='review-text4'> Please give us a honest review</p>
                            <form className='formmessage'>
                                
                                <label 
                                className='form-label' 
                                for="username"
                                style={{fontWeight: "600", fontSize: "14pt", color: "#000",}}>
                                Username </label>
                                <br/>

                                <input 
                                type="text"
                                className="form-control"
                                onChange={handleInput}
                                id="nama"
                                name="username"
                                value={user.username}
                                placeholder="Your Username" />
                                <br/>
                                
                                <label 
                                for="floatingTextarea2" 
                                className="form-label"
                                style={{fontWeight: "600", fontSize: "14pt", color: "#000",}}> 
                                Review </label>
                                <br/>
                                
                                <textarea 
                                className="form-control"
                                onChange={handleInput}
                                name="message"
                                value={user.message}
                                rows="12"
                                id="floatingTextarea2"
                                placeholder="Masukkan Pesan"
                                style={{ height: "100px" }} />
                                <br/> <br/>
                            
                                <a href='/review/1'> <button 
                                type="submit"
                                style={{ background: "#5DBB63" }}
                                className="btn btn-primary"
                                onClick={onSubmitList}>
                                    Post Review
                                </button> </a>
                            </form>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            {dataMessage?.Message.map((show) => (
                            <li className="komen-list card-kontent mb-4">
                              <div className="">
                                <h5
                                  style={{ paddingLeft: "10%" }}
                                  className="card-titles ml-4 mt-3">
                                  {show.username}
                                </h5>

                                <p
                                  style={{
                                  paddingRight: "10px",
                                  paddingLeft: "10px",
                                  }}
                                  className="card-text ml-4 mt-3">
                                  {show.message}
                                </p>

                                <button
                                  type="submit"
                                  style={{ background: "red", marginRight: 10 }}
                                  className="btn"
                                  onClick={onDeleteItem}
                                  value={show.id}
                                  className="del">
                                  Delete
                                </button>
                                  
                                <button
                                  type="submit"
                                  style={{ background: "#FFDAC1" }}
                                  className="btn"
                                  onClick={clickUser}
                                  value={show.id}
                                  className="edit">
                                  Edit
                                </button>

                                  <form
                                    onSubmit={(e) => submitMessageBaru(e, show.id)}>
                                    {userStatus ? (
                                    <input
                                      onChange={(e) =>
                                        setMessageBaru(e.target.value)
                                      }
                                      placeholder={show.message} />
                                    ) : (
                                      ""
                                    )}
                                  </form>
                              </div>
                            </li>
                          ))}
                        </Grid>
                    </Grid>
                </Container> 
                </div> 
                <div> <Footer /> </div>     
            </div>
        )
    };

export default Review;
