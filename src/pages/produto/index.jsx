import React, { useState } from "react";
import { Main } from "./style";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import GlobalStyle from '../../global/globalStyle.js';
import Navigation from "../../components/Navigation/Nav.jsx";
import { Footer } from "../../components/footer/index.jsx";

export default function Produto({ handleInputChange, query }) {
  const [like, setLike] = useState(parseInt(Math.random() * 1000));
  const [unlike, setUnLike] = useState(parseInt(Math.random() * 1000));

  const handleClickLike = (e) => {
    setLike(like + 1);
  }

  const handleClickUnLike = (e) => {
    setUnLike(unlike + 1);
  }

  return (
    <>
      <GlobalStyle />
      <Navigation query={query} handleInputChange={handleInputChange} />

      <Main>
        <img
          className="produto-img"
          src="https://m.media-amazon.com/images/I/81DrHt5-OBL._AC_SX569_.jpg"
          alt=""
        />

        <div className="produto-informacoes">
          <h2 className="produto-nome">Fifa</h2>
          <div className="like">
            <a type="submit" onClick={handleClickLike}>
              <AiOutlineLike size={25} />
            </a>
            <p>{like}</p>
            <a type="submit" className="deslike" onClick={handleClickUnLike}>
              <AiOutlineDislike size={25} />
            </a>
            <p>{unlike}</p>
          </div>
          <p className="produto-valos">R$ 91,90</p>
          <a className="mais-informacoes" href="#">
            Mais informações
          </a>
          <button className="produto-comprar">Comprar</button>
        </div>
      </Main>
      <Footer />
    </>
  );
}
