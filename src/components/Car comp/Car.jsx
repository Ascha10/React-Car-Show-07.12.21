import react, {Component} from "react";

class Car extends Component{
    render(){
        return(
            <article>
                <h1>{this.props.name}</h1>
                <img src={this.props.image} alt="car" />
                <h3>Starting At {this.props.price}</h3>
                <section>
                    <div>🎯 Speed </div>
                    <div>🎯 Seats </div>
                    <div>🎯 Year +  </div>
                    <div>🎯 Engine</div>
                    <div>🎯 Ermi Added</div>
                </section>
            </article>
        )
    }
}

export default Car;