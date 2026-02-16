import Map "mo:core/Map";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";
import Char "mo:core/Char";




actor {
  type Product = {
    id : Nat;
    name : Text;
    description : Text;
    price : Nat;
    image : Text;
    thumbnail : Text;
  };

  module Product {
    public func compare(p1 : Product, p2 : Product) : Order.Order {
      Nat.compare(p1.id, p2.id);
    };
  };

  let products = Map.fromArray<Nat, Product>([]);

  public shared ({ caller }) func initialize() : async () {
    let initialProducts = [
      {
        id = 0;
        name = "Bathroom Cleaner Spray";
        description = "Cleans limescale and soap residue streak-free from showers, bathtubs, sinks, glass surfaces, fittings, wall and floor tiles, toilets and urinals. Also suitable for general descaling and cleaning in the household, e.g. on coffee machines. Contents: 500 ml + pump spray head";
        price = 5900;
        image = /*#__PURE__*/ "https://kleenora.shop/cdn/shop/files/Kleenora_Produktzusammenstellung-09_2.png";
        thumbnail = /*#__PURE__*/ "https://kleenora.shop/cdn/shop/files/Kleenora_Produktzusammenstellung-09_2.png";
      },
      {
        id = 1;
        name = "Carpet Cleaner Concentrate";
        description = "For machine and manual cleaning of carpets made of synthetic fibers, wool, viscose, and natural fiber mixtures. Removes dirt, oil, grease stains, walkways, etc. Not suitable for sisal fibers or coconut mats. Sufficient for 125 square meters. Contents: 2.5 l";
        price = 5935;
        image = /*#__PURE__*/ "https://kleenora.shop/cdn/shop/files/Kleenora_Produktzusammenstellung-14_fbee2025-81fc-4300-b55a-10736a90088d.png";
        thumbnail = /*#__PURE__*/ "https://kleenora.shop/cdn/shop/files/Kleenora_Produktzusammenstellung-14_fbee2025-81fc-4300-b55a-10736a90088d.png";
      },
      {
        id = 2;
        name = "All-Purpose Cleaner Concentrate";
        description = "Can be used in many areas: for manual cleaning and with a cleaning machine for cleaning floors, furniture, and all surfaces in the kitchen and bathroom. Removes deposits, grease, starch, and protein residues for streak-free surfaces. Suitable for glass, glass tiles, wood, linoleum, PVC, and most ceramics. Contents: 2.5 l";
        price = 6001;
        image = /*#__PURE__*/ "https://kleenora.shop/cdn/shop/files/Kleenora_Produktzusammenstellung-08_1.png";
        thumbnail = /*#__PURE__*/ "https://kleenora.shop/cdn/shop/files/Kleenora_Produktzusammenstellung-08_1.png";
      },
      {
        id = 3;
        name = "Fabric Softener-Free Detergent";
        description = "For machine and hand washing of all washables at 30.0-95.0\u{00b0}C. Free from fragrances and dyes, thus particularly suitable for allergy sufferers and baby laundry. Concentrated product for whites and colors with excellent stain and grease dissolving capacity. Contents: 2.5 l";
        price = 7867;
        image = /*#__PURE__*/ "https://kleenora.shop/cdn/shop/files/Kleenora_Produktzusammenstellung-11_1.png";
        thumbnail = /*#__PURE__*/ "https://kleenora.shop/cdn/shop/files/Kleenora_Produktzusammenstellung-11_1.png";
      },
      {
        id = 4;
        name = "Dishwashing Liquid & Hand Soap";
        description = "Mild on hands, dermatologically tested, suitable for hand washing (pots, dishes, glasses, cutlery) as well as for lightly soiled surfaces, e.g. wooden tables or doors. pH-neutral, yet effective against stubborn soiling, deposits, and grease. Contents: 2.5 l";
        price = 8734;
        image = /*#__PURE__*/ "https://kleenora.shop/cdn/shop/files/Kleenora_Produktzusammenstellung-13_1.png";
        thumbnail = /*#__PURE__*/ "https://kleenora.shop/cdn/shop/files/Kleenora_Produktzusammenstellung-13_1.png";
      },
    ];

    products.clear();
    for (product in initialProducts.values()) {
      products.add(product.id, product);
    };
  };

  public query ({ caller }) func getProducts() : async [Product] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func getProductById(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product with id " # id.toText() # " does not exist.") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getProductsInRange(fromInclusive : Nat, toExclusive : Nat) : async [Product] {
    products.values().toArray().sliceToArray(fromInclusive, toExclusive).sort();
  };

  public shared ({ caller }) func updateProduct(product : Product) : async () {
    products.add(product.id, product);
  };

  public shared ({ caller }) func deleteProduct(productId : Nat) : async () {
    if (not products.containsKey(productId)) {
      Runtime.trap("Product with id " # productId.toText() # " does not exist.");
    };
    products.remove(productId);
  };

  public shared ({ caller }) func clearProducts() : async () {
    products.clear();
  };
};
