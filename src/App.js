import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Categories from "./components/Categories";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            orders: [],
            currentItems: [],
            items: [
                {
                    id:1,
                    title: 'Стул серый',
                    img: 'greyChair2.jpg',
                    desc: 'Lorem ipsum door sit amet, consectetur adipisicing',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id:2,
                    title: 'Стол',
                    img: 'table.jpg',
                    desc: 'Lorem ipsum door sit amet, consectetur adipisicing',
                    category: 'tables',
                    price: '149.99'
                },
                {
                    id:3,
                    title: 'Диван угловой',
                    img: 'sofaconner.jpg',
                    desc: 'Lorem ipsum door sit amet, consectetur adipisicing',
                    category: 'sofa',
                    price: '569.99'
                }
            ]
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
    }
    render() {
        return (
            <div className="wrapper">
                <Header orders = {this.state.orders} onDelete = {this.deleteOrder}></Header>
                <Categories chooseCategory = {this.chooseCategory}></Categories>
                <Items items={this.state.currentItems} onAdd={this.addToOrder}></Items>
                <Footer></Footer>
            </div>
        );
    }
    chooseCategory(category) {
if (category ==='all') {
    this.setState({currentItems: this.state.items})
    return
}
        this.setState({
            currentItems: this.state.items.filter(el=> el.category === category)

        })
    }
    deleteOrder (id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }
    addToOrder(item){
        let isInArray = false
        this.state.orders.forEach(el=>{
            if (el.id === item.id)
                isInArray = true

        })
        if (!isInArray)
        this.setState({orders: [...this.state.orders,item]})
    }
}
/*function App() {
  return (
      <div className="wrapper">
        <Header></Header>
        <Footer></Footer>
      </div>
  );
}*/

export default App;
