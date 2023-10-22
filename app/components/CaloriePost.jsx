"use client";

import React, { useState } from "react";
import styles from '../page.module.css';
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";
import {RiDeleteBin5Line} from 'react-icons/ri';
import {FiEdit2} from 'react-icons/fi'

const CaloriePost = ({ post }) => {
  const router = useRouter();

  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [postToEdit, setPostToEdit] = useState(post);

  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/posts/${post.id}`, postToEdit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenModalEdit(false);
        router.refresh();
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPostToEdit((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDeletePost = (id) => {
    axios
    .delete(`/api/posts/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setOpenModalEdit(false);
      router.refresh();
    });
  }

  return (
    <div className={styles.card} key={post.id}>
    <ul className={styles.nutrientsList}>
      <h3>{post.date}</h3>

      <li>TotalCalories<br/>{post.totalCalories} cal</li>
      <li>CaloriesBurned<br/>{post.CaloriesBurned} cal</li>
      <li>Weight<br/>{post.weight}kg</li>
      
      
    </ul>
      

      <div>
        <button
          className={styles.editB}
          onClick={() => setOpenModalEdit(true)}
        >
          <FiEdit2 style={{fontSize:20}}/>
        </button>

        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form  onSubmit={handleEditSubmit}>
            <h1>Edit</h1>

            <input
              type="number"
              placeholder="Protein"
              name="protein"
            
              value={postToEdit.protein || ""}
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Sugar"
              name="sugar"
              
              value={postToEdit.sugar || ""}
              onChange={handleChange}
            />

<input
              type="number"
              placeholder="Fat"
              name="fat"
           
              value={postToEdit.fat || ""}
              onChange={handleChange}
            />


<input
              type="number"
              placeholder="Weight"
              name="weight"
          
              value={postToEdit.weight || ""}
              onChange={handleChange}
            />

<input
              type="number"
              placeholder="TotalCalories"
              name="totalCalories"
          
              value={postToEdit.totalCalories || ""}
              onChange={handleChange}
            />

<input
              type="number"
              placeholder="CaloriesBurned"
              name="CaloriesBurned"
          
              value={postToEdit.CaloriesBurned || ""}
              onChange={handleChange}
            />

            <button type="submit">
              Submit
            </button>
          </form>
        </Modal>

        <button className={styles.deleteB} onClick={() => setOpenModalDelete(true)} >
          <RiDeleteBin5Line style={{fontSize:20}}/>
        </button>

        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h1>
            Are You Sure?
          </h1>

          <div>
            <button
              onClick={() => handleDeletePost(post.id)}
              
            >
              Yes
            </button>
            <button
              onClick={() => setOpenModalDelete(false)}
             
            >
              No
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CaloriePost;
