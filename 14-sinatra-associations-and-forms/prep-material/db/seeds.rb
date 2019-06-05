Book.destroy_all

GoogleBooks::Adapter.new("Neil Gaiman").fetch_books
GoogleBooks::Adapter.new("J.K. Rowling").fetch_books
GoogleBooks::Adapter.new("Nathanael West").fetch_books
GoogleBooks::Adapter.new("Adam West").fetch_books
