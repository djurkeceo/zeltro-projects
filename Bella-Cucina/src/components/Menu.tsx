import { motion } from 'framer-motion';
import './Menu.css';

const menuItems = [
  {
    category: "Antipasti",
    items: [
      { name: "Bruschetta Al Pomodoro", price: "€12", desc: "Grilled sourdough, heirloom tomatoes, basil, balsamic glaze" },
      { name: "Calamari Fritti", price: "€16", desc: "Crispy squid with spicy marinara and lemon aioli" },
      { name: "Burrata Pugliese", price: "€18", desc: "Creamy burrata, prosciutto di parma, arugula, extra virgin olive oil" }
    ]
  },
  {
    category: "Pasta",
    items: [
      { name: "Pappardelle al Cinghiale", price: "€24", desc: "Slow-cooked wild boar ragu, pecorino toscano" },
      { name: "Spaghetti alla Carbonara", price: "€21", desc: "Guanciale, egg yolk, pecorino romano, black pepper" },
      { name: "Ravioli ai Porcini", price: "€23", desc: "Handmade ravioli, wild porcini mushrooms, truffle butter" }
    ]
  },
  {
    category: "Dessert",
    items: [
      { name: "Tiramisu Classico", price: "€10", desc: "Savoiardi, espresso, mascarpone cream, cocoa powder" },
      { name: "Panna Cotta al Limone", price: "€9", desc: "Creamy panna cotta, lemon zest, fresh raspberry coulis" },
      { name: "Cannoli Siciliani", price: "€11", desc: "Crispy shells, sweet ricotta, pistachios, chocolate chips" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <h2 className="section-title">Nostro Menu</h2>
      {menuItems.map((section, idx) => (
        <div key={idx} className="menu-category">
          <h3 className="category-title">{section.category}</h3>
          <motion.div 
            className="menu-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {section.items.map((item, itemIdx) => (
              <motion.div 
                key={itemIdx} 
                className="menu-card"
                variants={itemVariants}
              >
                <div className="card-header">
                  <h4>{item.name}</h4>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Menu;
