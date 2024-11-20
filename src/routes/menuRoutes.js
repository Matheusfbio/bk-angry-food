const express = require("express");
const menuController = require("../controllers/menuController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Menu
 *   description: API to manage menu items
 */

/**
 * @swagger
 * /api/menu:
 *   post:
 *     summary: Create a new menu item
 *     tags: [Menu]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Menu item created successfully
 *       500:
 *         description: Server error
 */
router.post("/", menuController.createMenuItem);

/**
 * @swagger
 * /api/menu:
 *   get:
 *     summary: Retrieve all menu items
 *     tags: [Menu]
 *     responses:
 *       200:
 *         description: A list of menu items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MenuItem'
 *       500:
 *         description: Server error
 */
router.get("/", menuController.getMenuItems);

/**
 * @swagger
 * /api/menu/{id}:
 *   put:
 *     summary: Update a menu item
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the menu item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Menu item updated successfully
 *       500:
 *         description: Server error
 */
router.put("/:id", menuController.updateMenuItem);

/**
 * @swagger
 * /api/menu/{id}:
 *   delete:
 *     summary: Delete a menu item
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the menu item
 *     responses:
 *       204:
 *         description: Menu item deleted successfully
 *       500:
 *         description: Server error
 */
router.delete("/:id", menuController.deleteMenuItem);

module.exports = router;
