export async function getQrCode() {
  try {
    const response = await fetch(`http://localhost:8080/generate-qr-code`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    console.log("Received Blob:", blob);

    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  } catch (error) {
    console.error("Error fetching QR code:", error);
    throw error;
  }
}
