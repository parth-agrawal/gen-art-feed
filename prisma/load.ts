import prisma from "./client";

async function createArtEntries() {
    try {
        await prisma.art.create({
            data: {
                boxCount: 5,
                Author: {
                    create: {
                        email: "test@test.com",
                        name: "test",
                        ClerkId: "test"
                    }
                }
            }
        });

        await prisma.art.create({
            data: {
                boxCount: 10,
                Author: {
                    create: {
                        email: "test2@test.com",
                        name: "test2",
                        ClerkId: "test2"
                    }
                }
            }
        });

        console.log("Art entries created successfully");
    } catch (error) {
        console.error("Error creating art entries:", error);
    } finally {
        await prisma.$disconnect();
    }
}

export default createArtEntries;