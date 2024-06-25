import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailQuery } from "../../context/slice/ProductApi";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetDetailQuery(id);
  console.log(data?.data);
  return (
    <div className="container">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img src={data?.data?.urls[0]} width={300} alt="" />
          <h3>{data?.data?.title}</h3>
          <b>$ {data?.data?.price}</b>
        </div>
      )}
    </div>
  );
};

export default Detail;
