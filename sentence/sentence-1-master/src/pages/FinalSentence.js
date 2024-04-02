import React, { useState, useEffect } from "react";
import Home from "../components/Home";
import CustomPagination from "../components/Pagination";
import { toastFire } from "../components/SweetAlert";
import { acceptedSentence } from "../api/sentence";
import { convertNumber } from "../utility";
const FinalSentence = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sentenceList, setSentenceList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getSentenceList = async () => {
    try {
      const data = {
        from: (currentPage - 1) * 5,
        to: 5,
      };
      const response = await acceptedSentence(data);
      if (response.data.status !== 1) {
        return toastFire("error", "خطایی رخ داده است !");
      }
      const responseData = response.data;
      const sentences = responseData?.Sentences?.map(
        ({ ...sentence }, index) => ({
          ...sentence,
          id: convertNumber(index + 1),
        })
      );

      setSentenceList(sentences);
      setTotalPage(responseData?.Count);
    } catch (error) {}
  };

  useEffect(() => {
    getSentenceList();
  }, [currentPage]);

  return (
    <div className="background background_page">
      <h2 className="title">لیست جملات تایید شده</h2>
      {sentenceList.length ? (
        <div>
          {" "}
          <div className="p-4 mt-5">
            <table className="table responsive">
              <tbody>
                {sentenceList.map((sentence, index) => (
                  <>
                    <tr key={index} style={{ background: "#ffff" }}>
                      <td>{sentence.id}</td>
                      <td>{sentence.content}</td>
                      <td>{sentence.user_name}</td>
                    </tr>
                    <tr className="spacer"></tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <CustomPagination
              totalPages={totalPage}
              currentPag={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        <div className="show_message">
          <p>داده ایی موجود نیست !</p>
        </div>
      )}

      <Home homeContainer />
    </div>
  );
};

export default FinalSentence;
