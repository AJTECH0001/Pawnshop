import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select } from "./ui/select";

const Addluxury = () => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <div className=" flex justify-around items-center py-9">
      <form action="" className="space-y-4">
        <div className="w-[400px]">
        <Label htmlFor="watchtype">Luxury Name</Label>
          <Select>
            <option value="option1">Rolex</option>
            <option value="option2">Hublut</option>
            <option value="option3">Frank Miller</option>
            <option value="option3">Omega</option>
          </Select>

          <Label htmlFor="luxury">Luxury Name</Label>
          <Input
            id="luxury"
            placeholder="Luxury Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Label htmlFor="description">Luxury Name</Label>
          <Input
            id="description"
            placeholder="Luxury Condition"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Label htmlFor="price">Luxury Name</Label>
          <Input
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          
        </div>
      </form>
    </div>
  );
};

export default Addluxury;
