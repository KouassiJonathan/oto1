import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      Person: {
        fullName: "Timothée Kouassi",
        bio: "Développeur React passionné par le JavaScript et le design web.",
        imgSrc:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        profession: "Développeur Frontend",
      },

      shows: false,

      // Temps écoulé
      timeElapsed: 0,
    };
  }

  // Cycle de vie : après montage
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  // Nettoyage
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Afficher / masquer
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { Person, shows, timeElapsed } = this.state;

    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontFamily: "Arial",
        }}
      >
        <h1>Profil Personne</h1>

        <button
          onClick={this.toggleShow}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          {shows ? "Masquer le profil" : "Afficher le profil"}
        </button>

        {/* Temps écoulé */}
        <h3>Temps écoulé : {timeElapsed} secondes</h3>

        {/* Affichage conditionnel */}
        {shows && (
          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              width: "300px",
              margin: "20px auto",
              borderRadius: "10px",
            }}
          >
            <img
              src={Person.imgSrc}
              alt="profil"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <h2>{Person.fullName}</h2>

            <p>
              <strong>Profession :</strong> {Person.profession}
            </p>

            <p>{Person.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;