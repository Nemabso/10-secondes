export default {
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
    flexDirection: "column",
  },
  backIcon: {
    borderWidth: 1,
    borderColor: "#F39C12",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    backgroundColor: "#F39C12",
    borderRadius: 50,
    marginTop: 10,
    //marginLeft: 20,
  },
  begin: {
    flexDirection: "row",
    flex: 1,

    marginTop: 30,
  },
  beginLeft: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  beginRight: {
    flex: 3,
  },
  warningtext: {
    fontSize: 30,

    textAlign: "center",
    color: "#FF8C00",
    fontWeight: "bold",
  },
  img: {
    width: 86,
    height: 130,
    marginTop: 30,
    borderRadius: 130,
    resizeMode: "contain",
  },
  centercontainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 5,
  },
  text: {
    fontSize: 24,
    marginTop: 30,
    fontWeight: "bold",
    color: "#FF8C00",
  },

  gotext: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",

    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  nametext: {
    marginTop: 30,
    fontSize: 34,
    color: "#FF8C00",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },

  goIcon: {
    borderWidth: 1,
    borderColor: "#6C3483",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 50,
    backgroundColor: "#6C3483",
    borderRadius: 10,
    marginTop: 60,
  },
  end: {
    flex: 1,
  },
};
