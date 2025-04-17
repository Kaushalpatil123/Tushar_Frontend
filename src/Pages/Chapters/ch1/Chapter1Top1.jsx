import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import note1 from "../../../assets/Notes/Module5.pdf"

// Import your PDF file
import pdfFile from "../../../assets/Notes/Module5.pdf"; // Adjust path as needed

const Chapter1Top1 = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [section, setSection] = useState("");



  const flashcards = [
    { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
    { question: "What is JSX?", answer: "A syntax extension for JavaScript used in React." },
    { question: "What are hooks?", answer: "Functions that let you use state and other React features." },
    { question: "What is useState?", answer: "A Hook that lets you add state to a functional component." },
    { question: "What is useEffect?", answer: "A Hook that lets you perform side effects in function components." }
  ];
  return (
    <>
      <div className="">
        <div className="topHead">
          <h1 className='text-3xl font-bold py-5'>Chapter 1: Certain Infectious and Parasitic Diseases (A00-B99)</h1>
        </div>

        <div className="mainLecture py-5">
          <div className="videoLecture flex flex-col justify-center align-middle items-center">
            {/* <video className='w-[70%]' src="https://youtu.be/fUckHXowkTQ?si=EKFkQ1jaKQ-Cqvsh" controls></video> */}
            <iframe
              className="w-[70%] aspect-video"
              src="https://www.youtube.com/embed/fUckHXowkTQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div className="w-[80%] mx-auto pt-10 mb-5  overflow-hidden">
              <div
                className="flex justify-between items-center p-4 h-20 rounded-md bg-gray-200 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-lg font-semibold">Notes</span>
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {isDropdownOpen && (
                <div className="p-4 border bg-[#e5e7eb] rounded-md">
                  <div className="pdf-container mt-4" onContextMenu={(e) => e.preventDefault()}>
                    <iframe src={pdfFile} frameborder="0" className="w-full h-[40rem]"  // Disables right-click
                    ></iframe>
                  </div>

                </div>
              )}
            </div>
            <div className="flex gap-3 font-semibold text-xl cursor-pointer">
              <h3 onClick={() => setSection("flashcards")} className="bg-blue-800 text-white p-3 rounded-md">Flashcard</h3>
              <h3 onClick={() => setSection("quiz")} className="bg-blue-800 text-white p-3 rounded-md">Quiz</h3>
            </div>
            {section === "flashcards" && (
              <div className="flex flex-wrap gap-4 py-5 justify-center">
                {flashcards.map((card, index) => (
                  <div
                    key={index}
                    className="w-80 h-48 flex items-center justify-center bg-gray-200 rounded-lg shadow-lg cursor-pointer relative transform transition-transform duration-500"
                    onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
                    style={{ transform: flippedIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)', transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute w-full h-full flex items-center justify-center text-xl font-semibold p-4 backface-hidden">
                      {card.question}
                    </div>
                    <div className="absolute w-full h-full flex items-center justify-center text-xl font-semibold p-4 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                      {card.answer}
                    </div>
                  </div>
                ))}
              </div>
            )}

            </div>

          </div>

        </div>
      </>
      )
}

      export default Chapter1Top1