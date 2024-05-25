import React from 'react';
import SimpleReactFooter from 'simple-react-footer';

const Footer = () => {
  const description = "Pvolve, an intelligently crafted exercise method that builds functional strength, stability, and improved mobility, teaches your body how to age with grace. Few fitness programs bother to address challenges that plague our bodies as we get older, such as limited range of motion, wobbly balance, and lack of pelvic and core strength that can lead to pain and injuries. The Pvolve method does all of this and more.";

  const columns = [
    {
      title: "Column 1",
      resources: [
        { name: "Item 1", link: "/item1" },
        { name: "Item 2", link: "/item2" },
        { name: "Item 3", link: "/item3" },
        { name: "Item 4", link: "/item4" }
      ]
    },
    {
      title: "Column 2",
      resources: [
        { name: "Item 5", link: "/item5" },
        { name: "Item 6", link: "/item6" }
      ]
    },
    {
      title: "Column 3",
      resources: [
        { name: "Item 7", link: "/item7" },
        { name: "Item 8", link: "/item8" }
      ]
    }
  ];

  return (
    <SimpleReactFooter
      description={description}
      title="Pvolve"
      columns={columns}
      linkedin="lorem_ipsum_on_linkedin"
      facebook="lorem_ipsum_on_fb"
      twitter="lorem_ipsum_on_twitter"
      instagram="lorem_ipsum_live"
      youtube="UCFt6TSF464J8K82xeA?"
      pinterest="lorem_ipsum_collections"
      copyright="black"
      iconColor="black"
      backgroundColor="lightgrey"
      fontColor="black"
      copyrightColor="darkgrey"
    />
  );
}

export default Footer;
