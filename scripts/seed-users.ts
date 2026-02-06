
import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const password = await bcrypt.hash('password123', 10);

    // Create 6 Patients
    for (let i = 0; i < 6; i++) {
        const email = `patient${i + 1}@example.com`;
        const user = await prisma.user.upsert({
            where: { email },
            update: {},
            create: {
                email,
                name: `Patient ${i + 1}`,
                password,
                role: Role.PATIENT,
                emailVerified: new Date(),
            },
        });
        console.log(`Created patient: ${user.email}`);
    }

    // Create 4 Admins
    for (let i = 0; i < 4; i++) {
        const email = `admin${i + 1}@example.com`;
        const user = await prisma.user.upsert({
            where: { email },
            update: {},
            create: {
                email,
                name: `Admin ${i + 1}`,
                password,
                role: Role.ADMIN,
                emailVerified: new Date(),
            },
        });
        console.log(`Created admin: ${user.email}`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
