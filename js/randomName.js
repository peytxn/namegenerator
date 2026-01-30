function nameGenerator() {
  return {
    names: ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hannah", "Ivan", "Julia",
    "Mackenzie", "Peyton", "Jessica", "Emma", "Aimee", "Claire", "Courtney", "John", "Tammy"],
    currentName: "Click the button to see a name!",
    generateName() {
      const index = Math.floor(Math.random() * this.names.length);
      this.currentName = this.names[index];
    }
  }
}