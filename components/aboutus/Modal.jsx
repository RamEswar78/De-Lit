import { FaTimes } from "react-icons/fa";

export default function Modal({ member, setShowModal }) {
  return (
    <>
      <div class="fixed inset-0 bg-black opacity-50 z-[55]"></div>
      <div className="fixed inset-0 z-[57] overflow-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col bg-white rounded-2xl md:w-[50%] w-[90%]">
            <div className="sticky top-0 p-4 self-end z-[60]">
              <button
                className="bg-black p-1 md:p-2 rounded-full text-mywhite hover:text-white"
                onClick={() => setShowModal(false)}
              >
                <FaTimes size={17} />
              </button>
            </div>
            <div className="p-10">
              <h1 className="text-3xl font-bold text-center -mt-10">
                {member.member_name}
              </h1>
              <p className="text-lg mt-10 text-center">{member.about}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
