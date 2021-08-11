import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinity, setInfinity] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infinityScroll() {
      if (infinity) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener("wheel", infinityScroll);
    window.addEventListener("scroll", infinityScroll);
    return () => {
      window.removeEventListener("wheel", infinityScroll);
      window.removeEventListener("scroll", infinityScroll);
    };
  }, [infinity]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinity={setInfinity}
        />
      ))}
    </div>
  );
};

export default Feed;
