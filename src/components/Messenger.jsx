import React, { useEffect } from "react";
import styled from "styled-components";

export default function Messenger() {
  useEffect(() => {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <Container>
      {/* Load Facebook SDK for JavaScript */}
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        page_id="105463228193486"
        theme_color="#1698BA"
      ></div>
    </Container>
  );
}

const Container = styled.div`
  z-index: 1000;
`;
