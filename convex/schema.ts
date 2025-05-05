import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    age: v.optional(v.float64()),
    body: v.string(),
    user: v.string(),
  })
  .index("by_user", ["user"])
  .index("by_age", ["age"])
  .index("by_user_age", ["user", "age"]),
});
