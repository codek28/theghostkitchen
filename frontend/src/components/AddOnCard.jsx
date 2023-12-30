export const AddOnCard = ({
  addonarray,
  setCustomProduct,
  customproduct,
}) => {

  const toggleSelect = (addon) => {
    let addonname = addon.AddOnName;
    let addonprice = addon.AddOnPrice;
    let addonliststate = customproduct.addonlist;
    let addonpricestate = customproduct.addonprice;
    let newarr = addonliststate.filter((item) => item !== addonname);
    let addonlistpresence = addonliststate.filter((item) => item === addonname);

    if (addonlistpresence.length > 0) {
      setCustomProduct({
        ...customproduct,
        addonlist: newarr,
        addonprice: addonpricestate - addonprice,
      });
    } else {
      setCustomProduct({
        ...customproduct,
        addonlist: [...addonliststate, addonname],
        addonprice: addonpricestate + addonprice,
      });
    }
  };

  return (
    <div className="p-2">
      <div>
        {addonarray.length > 0 &&
          addonarray.map((addon, index) => {
            return (
              <div className="flex flex-row gap-2" key={index}>
                <h2>{addon.AddOnName}</h2>
                <h2>{addon.AddOnPrice}</h2>
                <input
                  type="checkbox"
                  name={`checkbox-addon-${customproduct.productname}`}
                  className="checkbox checkbox-info"
                  onChange={() => {
                    toggleSelect(addon);
                  }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
