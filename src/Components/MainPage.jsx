import "./MainPage.css";
import Img1 from "/Users/Pablo Conturso/Desktop/e-commerce tattoo/reactJsCoderhouse/src/Assets/portraits/portrait1.jpg";
import Img2 from "/Users/Pablo Conturso/Desktop/e-commerce tattoo/reactJsCoderhouse/src/Assets/portraits/portrait2.jpg";
export const MainPage = () => {
  return (
    <div className="eo">
      <div class="footer-social-links">
        <a href="#" title="Facebook" target="_blank">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#" title="Pinterest" target="_blank">
          <i class="fa fa-pinterest"></i>
        </a>
        <a href="#" title="Inta" target="_blank">
          <i class="fa fa-instagram"></i>
        </a>
      </div>
      <div className="containerPortraits">
      <div className="portraits">
      <img  className="imgMain" src={Img1} alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit fugiat soluta temporibus consequatur ullam ducimus nemo iusto, animi nisi!</p>
      </div>
      <div className="portraits">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate adipisci quaerat soluta aut deserunt nihil. Doloribus id quaerat accusantium.</p>
      <img className="imgMain" src={Img2} alt="" />
      
      </div>
      </div>
    </div>
  );
};
