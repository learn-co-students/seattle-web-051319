Book.destroy_all

Adapter::GoogleBooks.new("Neil Gaiman").fetch_books
Adapter::GoogleBooks.new("Nathanael West").fetch_books
Adapter::GoogleBooks.new("Ken liu").fetch_books
