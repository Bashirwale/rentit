import { useState } from "react";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { toast } from "react-toastify";
import { auth } from "../firebase.config";
import { getDatabase, ref as databaseRef, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "sale",
    name: "",
    bathrooms: 2,
    bedrooms: 2,
    parking: false,
    furnished: false,
    address: "",
    price: 0,
    images: [],
    companyName: "",
  });

  const {
    type,
    name,
    bathrooms,
    bedrooms,
    parking,
    furnished,
    address,
    price,
    images,
    companyName,
  } = formData;

  const navigate = useNavigate("/profile");

  const onChange = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: [...e.target.files],
      }));
    }
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userId = auth.currentUser;

      const db = getDatabase();

      // Store image in firebase
      const storeImage = async (image) => {
        return new Promise((resolve, reject) => {
          const storage = getStorage();
          const fileName = `${userId.uid}-${image.name}-${uuidv4()}`;

          const strRef = storageRef(storage, "images/" + fileName);

          const uploadTask = uploadBytesResumable(strRef, image);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
                default:
                  break;
              }
            },
            (error) => {
              reject(error);
            },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
              });
            }
          );
        });
      };

      const imgUrls = await Promise.all(
        [...images].map((image) => storeImage(image))
      ).catch(() => {
        console.log("Images not uploaded");
        return;
      });

      await set(databaseRef(db, `users/${userId.uid}/listings/${uuidv4()}`), {
        type: type,
        name: name,
        bathrooms: bathrooms,
        bedrooms: bedrooms,
        parking: parking,
        furnished: furnished,
        address: address,
        price: price,
        companyName: companyName,
        images: imgUrls,
      });
      setIsLoading(false);
      toast.success("Listing successfully posted");
    } catch (error) {
      setIsLoading(false);
      toast.error("could not create listings");
      console.log(error);
    }
    navigate("/");
    console.log(formData);
  };

  return (
    <div className="px-8">
      <header className="mt-8">
        <p className="text-3xl text-customPurple font-bold">Create a Post</p>
      </header>
      <main className="my-5">
        <form onSubmit={onSubmit}>
          <label className="block font-semibold">Sell / Rent</label>
          <div className="flex gap-4 mt-2">
            <button
              className={
                type === "sale"
                  ? "text-white font-semibold py-2 px-8 bg-customPurple rounded-md"
                  : "text-customPurple font-semibold py-2 px-8 bg-purple-50 rounded-md"
              }
              onClick={onChange}
              type="button"
              id="type"
              value="sale"
            >
              Sell
            </button>
            <button
              className={
                type === "rent"
                  ? "text-white font-semibold py-2 px-8 bg-customPurple rounded-md"
                  : "text-customPurple font-semibold py-2 px-8 bg-purple-50 rounded-md"
              }
              type="button"
              id="type"
              onClick={onChange}
              value="rent"
            >
              Rent
            </button>
          </div>

          <label className="block font-semibold mt-4">Name</label>
          <input
            className="text-base font-semibold py-3 px-4 border-none outline-none rounded-md bg-purple-50 mt-2"
            type="text"
            id="name"
            value={name}
            onChange={onChange}
            maxLength="32"
            minLength="10"
            required
          />
          <label className="block font-semibold mt-4">Company Name</label>
          <input
            className="text-base font-semibold py-3 px-4 border-none outline-none rounded-md bg-purple-50 mt-2"
            type="text"
            id="companyName"
            value={companyName}
            onChange={onChange}
            maxLength="32"
            minLength="10"
            required
          />

          <div className="flex items-center gap-4 mt-4">
            <div>
              <label className="block font-semibold">Bedrooms</label>
              <input
                className="flex items-center justify-center text-base text-center font-semibold py-3 px-2 border-none outline-none rounded-md bg-purple-50 mt-2"
                type="number"
                id="bedrooms"
                value={bedrooms}
                onChange={onChange}
                min="1"
                max="50"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Bathrooms</label>
              <input
                className="flex items-center justify-center text-base text-center font-semibold py-3 px-2 border-none outline-none rounded-md bg-purple-50 mt-2"
                type="number"
                id="bathrooms"
                value={bathrooms}
                onChange={onChange}
                min="1"
                max="50"
                required
              />
            </div>
          </div>

          <label className="block font-semibold mt-4">Parking spot</label>
          <div className="flex items-center gap-4">
            <button
              className={
                parking
                  ? "text-white font-semibold py-2 px-8 bg-customPurple rounded-md mt-2"
                  : "text-customPurple font-semibold py-2 px-8 bg-purple-50 rounded-md mt-2"
              }
              type="button"
              id="parking"
              value={true}
              onClick={onChange}
              min="1"
              max="50"
            >
              Yes
            </button>
            <button
              className={
                !parking && parking !== null
                  ? "text-white font-semibold py-2 px-8 bg-customPurple rounded-md mt-2"
                  : "text-customPurple font-semibold py-2 px-8 bg-purple-50 rounded-md mt-2"
              }
              type="button"
              id="parking"
              onClick={onChange}
              value={false}
            >
              No
            </button>
          </div>

          <label className="block font-semibold mt-4">Furnished</label>
          <div className="flex items-center gap-4">
            <button
              className={
                furnished
                  ? "text-white font-semibold py-2 px-8 bg-customPurple rounded-md mt-2"
                  : "text-customPurple font-semibold py-2 px-8 bg-purple-50 rounded-md mt-2"
              }
              type="button"
              id="furnished"
              onClick={onChange}
              value={true}
            >
              Yes
            </button>
            <button
              className={
                !furnished && furnished !== null
                  ? "text-white font-semibold py-2 px-8 bg-customPurple rounded-md mt-2"
                  : "text-customPurple font-semibold py-2 px-8 bg-purple-50 rounded-md mt-2"
              }
              type="button"
              id="furnished"
              onClick={onChange}
              value={false}
            >
              No
            </button>
          </div>

          <label className="block font-semibold mt-4">Address</label>
          <textarea
            className="flex items-center justify-center text-base mt-2 font-semibold bg-purple-50 max-w-xs w-11/12 px-4 py-3 outline-none rounded-md"
            type="text"
            id="address"
            value={address}
            onChange={onChange}
            required
          />

          <label className="block font-semibold mt-4">Price</label>
          <div className="flex items-center gap-2 mt-2">
            <input
              className="flex items-center justify-center font-semibold bg-purple-50 text-base px-2 py-3 text-center border-none outline-none rounded-md"
              type="number"
              id="price"
              value={price}
              onChange={onChange}
              min="50"
              max="750000000"
              required
            />
            <p class="font-semibold">
              ₦ {formData.type === "rent" ? "/ Month" : ""}
            </p>
          </div>

          <label className="block font-semibold mt-4">Images</label>
          <p className="text-sm opacity-75 my-2">
            The first image will be the cover (max 6).
          </p>
          <input
            className="flex items-center justify-center gap-4 font-semibold text-base bg-purple-50 text-center outline-none border-none w-full  py-3 px- rounded-md formInputFile"
            type="file"
            id="images"
            max="6"
            accept=".jpg,.png,.jpeg"
            onChange={onChange}
            multiple
          />
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center bg-customPurple text-white text-lg font-semibold py-3 px-8 cursor-pointer w-4/5 border-none outline-none rounded-md my-12 mx-auto disabled:bg-opacity-75"
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              "Create Posting"
            )}
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreatePost;
