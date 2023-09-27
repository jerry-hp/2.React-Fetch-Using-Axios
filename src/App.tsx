import React from "react";
import "./App.css";
import axios from "axios";

interface Tstate {
  dataCard: any[];
  Borgir: boolean;
  Bread: boolean;
  Breakfast: boolean;
  Cake: boolean;
  Chocolate: boolean;
  Desert: boolean;
  Fries: boolean;
  Noodles: boolean;
  Sausage: boolean;
  Spicy: boolean;
  Sweet: boolean;
  Favourite: boolean;
  Featured: boolean;
  New: boolean;
  category: boolean;
  tags: boolean;
  closeCategory: boolean;
  closeTags: boolean;
}

class App extends React.Component<{}, Tstate> {
  constructor(props: {}) {
    super(props);
    this.state = {
      dataCard: [],
      Borgir: false,
      Bread: false,
      Breakfast: false,
      Cake: false,
      Chocolate: false,
      Desert: false,
      Fries: false,
      Noodles: false,
      Sausage: false,
      Spicy: false,
      Sweet: false,
      Favourite: false,
      Featured: false,
      New: false,
      category: false,
      tags: false,
      closeCategory: true,
      closeTags: true,
    };
  }
  componentDidMount(): void {
    axios
      .get("https://api.npoint.io/15a3da86315e932c0d44/")
      .then((res) => {
        this.setState({ dataCard: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  }
  isBorgir = () => {
    this.setState({ Borgir: true });
  };
  isBread = () => {
    this.setState({ Bread: true });
  };
  isBreakfast = () => {
    this.setState({ Breakfast: true });
  };
  isChocolate = () => {
    this.setState({ Chocolate: true });
  };
  isFries = () => {
    this.setState({ Fries: true });
  };
  isNoodles = () => {
    this.setState({ Noodles: true });
  };
  isSausage = () => {
    this.setState({ Sausage: true });
  };
  isSpicy = () => {
    this.setState({ Spicy: true });
  };
  isSweet = () => {
    this.setState({ Sweet: true });
  };
  isDesert = () => {
    this.setState({ Desert: true });
  };
  isCake = () => {
    this.setState({ Cake: true });
  };
  isFavourite = () => {
    this.setState({ Favourite: true });
  };
  isFeatured = () => {
    this.setState({ Featured: true });
  };
  isNew = () => {
    this.setState({ New: true });
  };
  handleClick = () => {
    const { Borgir, Bread, Breakfast, Cake, Chocolate, Desert, Fries, Noodles, Sausage, Spicy, Sweet, Favourite, Featured, New } = this.state;

    alert(
      `ANDA MEMILIH:\n \n${Borgir ? "✨Borgir\n" : ""}${Bread ? "✨Bread\n" : ""}${Breakfast ? "✨Breakfast\n" : ""}${Cake ? "✨Cake\n" : ""}${Chocolate ? "✨Chocolate\n " : ""}${Desert ? "✨Desert\n " : ""}${Fries ? "✨Fries\n " : ""}${
        Noodles ? "✨Noodles\n " : ""
      }${Sausage ? "✨Sausage\n " : ""}${Spicy ? "✨Spicy\n " : ""}${Sweet ? "✨Sweet\n " : ""}${Favourite ? "✨Favourite\n " : ""}${Featured ? "✨Featured\n " : ""}${New ? "✨New\n " : ""}\n TERIMA KASIH!`
    );
    this.setState({ Borgir: false, Bread: false, Breakfast: false, Cake: false, Chocolate: false, Desert: false, Fries: false, Noodles: false, Sausage: false, Spicy: false, Sweet: false, Favourite: false, Featured: false, New: false });
  };
  openCategory = () => {
    this.setState({ category: true, closeCategory: false });
  };
  openTags = () => {
    this.setState({ tags: true, closeTags: false });
  };
  closeAllTabs = () => {
    this.setState({ closeCategory: true, closeTags: true, category: false, tags: false });
  };

  render() {
    const { dataCard, Borgir, Bread, Breakfast, Cake, Chocolate, Desert, Fries, Noodles, Sausage, Spicy, Sweet, category, tags, Favourite, Featured, New, closeCategory, closeTags } = this.state;
    return (
      <>
        <div className="container">
          <div className="leftContainer">
            <h1>Filter</h1>
            <hr />
            <input className="cari" type="text" />
            <button onClick={this.handleClick}>Cari</button>
            {/*  */}
            <div className="categoryCnt">
              <label htmlFor="gg">kategori</label>
              <button id="gg" className="btnHiden" onClick={this.openCategory}>
                {closeCategory && <i className="fa-solid fa-arrow-left-long"></i>}
                {category && <i className="fa-solid fa-arrow-down-long"></i>}
              </button>
            </div>
            {category && (
              <div className="checkboxCnt">
                <div>
                  <input type="checkbox" id="cb1" checked={Borgir} onChange={this.isBorgir} />
                  <label htmlFor="cb1">Borgir</label>
                </div>
                <div>
                  <input type="checkbox" id="cb2" checked={Bread} onChange={this.isBread} />
                  <label htmlFor="cb2">Bread</label>
                </div>
                <div>
                  <input type="checkbox" id="cb3" checked={Breakfast} onChange={this.isBreakfast} />
                  <label htmlFor="cb3">Breakfast</label>
                </div>
                <div>
                  <input type="checkbox" id="cb4" checked={Cake} onChange={this.isCake} />
                  <label htmlFor="cb4">Cake</label>
                </div>
                <div>
                  <input type="checkbox" id="cb5" checked={Chocolate} onChange={this.isChocolate} />
                  <label htmlFor="cb5">Chocolate</label>
                </div>
                <div>
                  <input type="checkbox" id="cb6" checked={Desert} onChange={this.isDesert} />
                  <label htmlFor="cb6">Desert</label>
                </div>
                <div>
                  <input type="checkbox" id="cb7" checked={Fries} onChange={this.isFries} />
                  <label htmlFor="cb7">Fries</label>
                </div>
                <div>
                  <input type="checkbox" id="cb8" checked={Noodles} onChange={this.isNoodles} />
                  <label htmlFor="cb8">Noodles</label>
                </div>
                <div>
                  <input type="checkbox" id="cb9" checked={Sausage} onChange={this.isSausage} />
                  <label htmlFor="cb9">Sausage</label>
                </div>
                <div>
                  <input type="checkbox" id="cb10" checked={Spicy} onChange={this.isSpicy} />
                  <label htmlFor="cb10">Spicy</label>
                </div>
                <div>
                  <input type="checkbox" id="cb11" checked={Sweet} onChange={this.isSweet} />
                  <label htmlFor="cb11">Sweet</label>
                </div>
              </div>
            )}
            {/*  */}
            <div className="categoryCnt">
              <label htmlFor="gj">Tags</label>
              <button id="gj" className="btnHiden" onClick={this.openTags}>
                {closeTags && <i className="fa-solid fa-arrow-left-long"></i>}
                {tags && <i className="fa-solid fa-arrow-down-long"></i>}
              </button>
            </div>
            {tags && (
              <div className="checkboxCnt">
                <div>
                  <input type="checkbox" id="mr" checked={Favourite} onChange={this.isFavourite} />
                  <label id="merah" htmlFor="mr">
                    FAVOURITE
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="kn" checked={Featured} onChange={this.isFeatured} />
                  <label id="kuning" htmlFor="kn">
                    FEATURED
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="hj" checked={New} onChange={this.isNew} />
                  <label id="hijau" htmlFor="hj">
                    NEW
                  </label>
                </div>
              </div>
            )}
            {(category || tags) && (
              <div className="allTabsCnt">
                <button id="allTabs" className="allTabs" onClick={this.closeAllTabs}>
                  Close Opened Tab <i className="fa-regular fa-circle-xmark"></i>
                </button>
              </div>
            )}
          </div>

          {/*  */}
          <div className="cardContainer">
            {dataCard.map((item, index) => (
              <div key={index} className="card">
                <img src={item.Image} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div>
                  <button>{item.button1}</button>
                  {item.button2 && <button>{item.button2}</button>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
