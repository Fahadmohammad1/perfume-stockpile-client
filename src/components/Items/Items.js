import React from "react";

const Items = () => {
  return (
    <div className="py-5 container mx-auto">
      <h1 className="text-2xl font-bold pb-4 font-serif">Items Available</h1>
      <div>
        <div className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
                Comming Soon in Stock
              </h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom.
              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nHQ-xa3U0Q9_zj4x4VF-nbaQMh73Nju-_w&usqp=CAU"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://media.glamourmagazine.co.uk/photos/620fac5b71d639d6fbdef720/1:1/w_1920,h_1920,c_limit/NEWPERFUME%20180222%20DEFAULT2.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMN3GfsU8oXur1K11SkY3OIBkaqNyVoHjqQ&usqp=CAU"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://www.jeanpaulgaultier.com/ww/sites/ww/files/styles/scale_1920/public/2022-02/jean-paul-gaultier_women-fragrances.png.jpg?itok=yY_K1VEf"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://cdn.shopify.com/s/files/1/0100/5822/t/7/assets/slide-2-image.jpg?v=8086279607771032427"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://static.onecms.io/wp-content/uploads/sites/24/2020/10/28/2655501_South_07w_1-2000.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
