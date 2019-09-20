export default {
  //.ColorBox
  ColorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-4px",
    cursor: "pointer"
  },

  SingleColorBox: {
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-4px",
    cursor: "pointer"
  },
  //.copy-button
  copyButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, .3)",
    fontSize: "1rem",
    lineHeight: "30px",
    color: "#fff",
    textTransform: "uppercase",
    border: "none",
    opacity: "0",
    transition: ".4s",
    cursor: "pointer",

    '&:hover': {
      opacity: 1
    }
  },
  //.box-content
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "6px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase"
  },
  //.see-more
  seeMore: {
    background: "rgba(255, 255, 255, .3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    color: "#fff",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px"
  },
  //.copy-overlay
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(.1)",
    transition: "transform .5s ease-in-out"
  },
  //.copy-overlay.show
  copyOverlayShow: {
    width: "100%",
    height: "100%",
    transition: "transform .5s ease-in-out",
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute"
  },
  //.copy-msg
  copyMsg: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    transform: "scale(.1)",
    opacity: "0",
    color: "#fff",
    transition: "transform .7s ease-in-out",
    flexDirection: "column",

    '& h1': {
      textShadow: "1px 2px #000",
      backgroundColor: "rgba(255, 255, 255, .2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "10px"
    }
  },

  //.copy-msg.show
  copyMsgShow: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    color: "#fff",
    transition: "transform .7s ease-in-out",
    flexDirection: "column",
    transform: "scale(1)",
    zIndex: "11",
    opacity: "1",

    '& h1': {
      textShadow: "1px 2px #000",
      backgroundColor: "rgba(255, 255, 255, .2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "10px"
    }
  }
}