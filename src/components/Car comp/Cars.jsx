import react, {Component} from "react";
import Car from "./Car";
import "./Car.css"


class Cars extends Component{
    render(){
        return(
            <section className="wrapper">
                <section className="welcomeDetails">
                <h1>Model Comparsion</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, delectus?
                    A quo repellendus totam dolorem aliquam fugit unde vitae iusto?
                    Quos, aperiam velit! Libero quia deserunt iusto,
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, delectus?
                    A quo repellendus totam dolorem aliquam fugit unde vitae iusto?
                    Quos, aperiam velit! Libero quia deserunt ius illo labore ducimus!</p>
                </section>

                <section className="carsContainer">
                    <Car name="Audi" image="https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__480.jpg" price="15000$"/>
                    <Car name="Mercedes-Benz" image="https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381__480.jpg" price="10000$"/>
                    <Car name="hyundai" image="https://cdn.pixabay.com/photo/2020/03/24/16/44/hyundai-4964667__340.jpg" price="20000$"/>
                </section>
            </section>
        )
    }
}

export default Cars;