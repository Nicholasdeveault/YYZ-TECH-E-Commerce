const data = require("./data/items.json");


// this is a handlers file


// to get item by Id
const ItemsData = (req, res) => {

  const findData = data.find((items) => {
    return items._id === Number(req.params._id);
  });
  if (findData) {
    res.status(200).json({ data: findData });
  } else {
    res.status(400).json({ msg: "not found!" });
  }
};

const updateInventory = (req, res) => {
  const { id, num } = req.body;
  let newArr = [];
  data.find((item) => {
    for (let i = 0; i < id.length; i++) {
      if (item._id === Number(id[i])) {
        newArr.push(item);
      }
    }
  });
  if (newArr.length > 0) {
    for (let j = 0; j < newArr.length; j++) {
      for (let l = 0; l < num.length; l++) {
        if (j === l) {
          newArr[j].numInStock = newArr[j].numInStock - num[l];
        }
      }
    }

    res.status(200).json({ status: 200, success: true });
  }
};


module.exports = { ItemsData, updateInventory };

