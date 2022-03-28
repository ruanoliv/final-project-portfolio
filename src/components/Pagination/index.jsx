import React, {useState} from "react";
import { Wrapper, Content } from "./Pagination.style";
import Button from '../Button/index';
import Tecnologys from "./Cards/Tecnologys";
import GitData from "./Cards/GitData";

export default function Pagination(props) {
    const [showGitData, setShowGitData] = useState(false)
    const [showContainer, setShowContainer] = useState(false)
    const [showTecnologys, setShowTecnologys] = useState(false)

    const showGitDataHandle = () =>{
         if(showContainer){
             setShowContainer(false)
         }
         if(showTecnologys){
             setShowTecnologys(false)
         }
         setShowGitData(true)
    }

    const showContainerHandle = () =>{
         if(showGitData){
             setShowGitData(false)
         }
         if(showTecnologys){
             setShowTecnologys(false)
         }
         setShowContainer(true)
    }

    const showTecnologysHandle = () =>{
         if(showGitData){
             setShowGitData(false)
         }
         if(showContainer){
             setShowContainer(false)
         }
         setShowTecnologys(true)
    }

    return (
        <Wrapper>
            <Content>
                <div className="Pagination">
                    <hr className="Line"/>
                    <div className="Controls">
                        <Button width="150px" height="35px" clicked={showGitDataHandle}>Github</Button>
                        <Button width="150px" height="35px" clicked={showContainerHandle}>Containers</Button>
                        <Button width="150px" height="35px" clicked={showTecnologysHandle}>Tecnologias</Button>
                    </div>
                    <div className="Content">
                        {showGitData ? <GitData content={props.data}/> : ''}
                        {showContainer ? <div>Container</div> : ''}
                        {showTecnologys ? <Tecnologys techs={props.tecnology.tecnologys}/> : ''}
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}