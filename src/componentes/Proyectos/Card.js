import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const Card = ({name, img, description, pathDemo,pathGithub}) =>{


    return(
        <div className="card">
            <img className='card_img' src={img} alt={name}/>
            <div className="container">
                <h4><b>{name}</b></h4>
                <p>{description}</p>
                <div className="botones">
                    <a href={pathDemo} target="_blank"><button><CgWebsite/> Demo</button></a>
                    <a href={pathGithub} target="_blank"><button><BsGithub/> Github</button></a>
                </div>
            </div>
        </div>
    )
}

export default Card