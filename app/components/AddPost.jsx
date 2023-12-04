"use client";

import { useState } from "react";
import styles from '../page.module.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import Modal from "./Modal";
import axios from "axios";
import {useRouter} from 'next/navigation'

const AddPost = () => {

    const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/posts", inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({});
        setModalOpen(false);
        router.refresh();
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };


  
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
      className={styles.addB}
      style={{fontSize:30,backgroundColor:'rgba(33, 156, 144, 0.43)',border:'none',color:'white'}}
      >
        <AiOutlinePlusCircle/>Add
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        
        <form  onSubmit={handleSubmit}>
          <h1>Add new Date</h1>

          <input
              type="number"
              placeholder="Protein"
              name="protein"
              
              value={inputs.protein || ""}
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Sugar"
              name="sugar"
             
              value={inputs.sugar || ""}
              onChange={handleChange}
            />

<input
              type="number"
              placeholder="Fat"
              name="fat"
            
              value={inputs.fat || ""}
              onChange={handleChange}
            />


<input
              type="number"
              placeholder="Weight"
              name="weight"
  
              value={inputs.weight || ""}
              onChange={handleChange}
            />


<input
              type="number"
              placeholder="TotalCalories"
              name="totalCalories"
  
              value={inputs.totalCalories || ""}
              onChange={handleChange}
            />


<input
              type="number"
              placeholder="CaloriesBurned"
              name="CaloriesBurned"
  
              value={inputs.CaloriesBurned || ""}
              onChange={handleChange}
            />

          <button type="submit">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;
