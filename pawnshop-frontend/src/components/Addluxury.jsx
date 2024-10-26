import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select } from "./ui/select";
import { Button } from "./ui/button"
// import { useAuth } from "../context/AuthContext";

const Addluxury = () => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('')
  const [watchType, setWatchType] = useState("");

//   const { signerP } = useAuth()


  return (
    <div className=" flex justify-around items-center py-9">
      <form action="" className="space-y-4">
        <div className="w-[400px]">
        <Label htmlFor="watchtype">Watch Type</Label>
          <Select
          id="watchtype"
          value={watchType}
          onChange={(e) => setWatchType(e.target.value)}
          >
            <option value="option1">Rolex</option>
            <option value="option2">Hublut</option>
            <option value="option3">Frank Miller</option>
            <option value="option3">Omega</option>
          </Select>

          <Label htmlFor="luxury">Model Name</Label>
          <Input
            id="luxury"
            placeholder="Luxury Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            placeholder="Recipet URL"
            value={itemName}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Label htmlFor="description">Condition</Label>
          <Input
            id="description"
            placeholder="Luxury Condition"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button type="submit" className="w-full mt-5 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Add Luxury
          </Button>

          
        </div>
      </form>
    </div>
  );
};

export default Addluxury;
