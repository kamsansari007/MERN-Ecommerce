import express from "express";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
const router = express.Router();

// post create category
router.post(
  "/create-category",
  requiredSignIn,
  isAdmin,
  createCategoryController
);

// put update category
router.put(
  "/update-category/:id",
  requiredSignIn,
  isAdmin,
  updateCategoryController
);
// get all categories
router.get("/get-category", categoryController);

// get category by id
router.get("/single-category/:slug", singleCategoryController);

// delete category by id
router.delete(
  "/delete-category/:id",
  requiredSignIn,
  isAdmin,
  deleteCategoryController
);
export default router;
