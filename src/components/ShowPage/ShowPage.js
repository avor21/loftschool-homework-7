import React from "react";
import { useParams } from 'react-router-dom';
import './ShowPage.css';

const ShowPage = (props) => {
  const { id } = useParams();

  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default ShowPage;