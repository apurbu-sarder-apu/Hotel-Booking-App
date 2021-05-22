import React, { Component } from 'react';
import {FaCocktail, FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info:'Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corporis!'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corporis!'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info:'Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corporis!'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:'Lorem ipsum dolor sit amet consectetur adipsicing elit. Magni, corporis!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <h3 class="my-4 font-weight-light text-black text-center">A place that sparks creativity, fuels the imagination, and welcomes reflection and relaxation.</h3>    
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
