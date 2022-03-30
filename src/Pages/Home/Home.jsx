import React, { useState, useEffect, useCallback } from "react";
import { Wrapper, Content } from "./Home.style";
import GitPhoto from "../../components/GitPhoto";
import About from "../../components/About";
import Pagination from "../../components/Pagination";
import { useLocation } from "react-router-dom";

export default function Home(props) {
    const location = useLocation();
    const [gitUserData, setGitUserData] = useState({
        name: "carregando...",
    });
    const [gitUserContainers, setGitContainerData] = useState({});

    async function getGitDataByLogin() {
        let url = "https://api.github.com/users/" + location.state.github;
        return new Promise((resolve, reject) => {
            let ajax = new XMLHttpRequest();

            ajax.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let ajax = JSON.parse(this.responseText);
                    resolve(ajax);
                }
            };

            ajax.open("GET", url, true);
            ajax.send();
        });
    }

    const getGitUserData = useCallback(async () => {
        const data = await getGitDataByLogin();
        setGitUserData(data);
    }, []);

    useEffect(() => {
        getGitUserData();
    }, [getGitUserData]);

    async function getGitContainersByLogin() {
        let url =
            "https://api.github.com/users/" + location.state.github + "/repos";
        return new Promise((resolve, reject) => {
            let ajax = new XMLHttpRequest();

            ajax.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let ajax = JSON.parse(this.responseText);
                    resolve(ajax);
                }
            };

            ajax.open("GET", url, true);
            ajax.send();
        });
    }

    const getGitContainerData = useCallback(async () => {
        const data = await getGitContainersByLogin();
        setGitContainerData(data);
    }, []);

    useEffect(() => {
        getGitContainerData();
    }, [getGitContainerData]);

    console.log(gitUserData);
    console.log(gitUserContainers);
    return (
        <Wrapper>
            <Content>
                <section className="Home">
                    <div className="UserInformation">
                        <GitPhoto data={gitUserData} />
                        <About inputData={location.state} apiData={gitUserData} />
                    </div>
                    <div className="Content">
                            <Pagination
                                tecnology={location.state}
                                data={gitUserData}
                                containers={gitUserContainers}
                            />
                    </div>
                </section>
            </Content>
        </Wrapper>
    );
}
