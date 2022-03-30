import React, {useState} from "react";
import { Wrapper, Content } from "./Pagination.style";
import Button from '../Button/index';
import Tecnologys from "./Cards/Tecnologys";
import GitData from "./Cards/GitData";
import GitContainers from "./Cards/GitContainers";

export default function Pagination(props) {
    const [showGitData, setShowGitData] = useState(true)
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
                    <div className="Controls">
                        <Button width="150px" height="35px" clicked={showGitDataHandle} color={showGitData ? '#000' : ''}>Github</Button>
                        <Button width="150px" height="35px" clicked={showContainerHandle} color={showContainer ? '#000' : ''}>Containers</Button>
                        <Button width="150px" height="35px" clicked={showTecnologysHandle} color={showTecnologys ? '#000' : ''}>Tecnologias</Button>
                    </div>
                    <div className="Content">
                        {showGitData ? <GitData content={props.data}/> : ''}
                        {showContainer ? <GitContainers containers={props.containers}/> : ''}
                        {showTecnologys ? <Tecnologys techs={props.tecnology.tecnologys}/> : ''}
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}