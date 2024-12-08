import requests

def download_image(url, filename):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for HTTP errors
        with open(f'/Users/Walterrines/websites/moneymasteryresources/public/images/blog/{filename}', 'wb') as file:
            file.write(response.content)
        print(f"Successfully downloaded {filename}")
    except Exception as e:
        print(f"Error downloading {filename}: {e}")

# Investment strategies image
download_image(
    "https://images.unsplash.com/photo-1579532537555-4f0f53d4d9b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800", 
    "investing-featured.jpg"
)

# Credit scores image
download_image(
    "https://images.unsplash.com/photo-1560264280-1b1c3c3e7e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800", 
    "credit-scores-featured.jpg"
)
