import express from 'express';
import { PrismaClient } from '@prisma/client';
import { isNumeric } from '../utils';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async function(req, res, next){
    const { query, filter } = req.query;

    if (!query || query === 'null' || (filter === 'ruleId' && !isNumeric(query))) {
        const rule = await prisma.rule.findMany({
            orderBy: { ruleId: 'asc' },
        });
        return res.json(rule);
    }

    const where = {};

    if (filter && filter !== 'null') {
        where[filter] = filter === 'ruleId' ?
            { equals: BigInt(query) } :
            { contains: query, mode: 'insensitive' };
        const rule = await prisma.rule.findMany({
            where,
            orderBy: { ruleId: 'asc' },
        });
        return res.json(rule);
    }

    where['OR'] = isNumeric(query) ?
        [
            { name: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
            { ruleId: { equals: BigInt(query) } },
            { type: {contains: query, mode: 'insensitive' }},
            { stringRepresentation: {contains: query, mode: 'insensitive' }}
        ] :
        [
            { name: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
            { type: {contains: query, mode: 'insensitive' }},
            { stringRepresentation: {contains: query, mode: 'insensitive' }}
        ];
    const rule = await prisma.rule.findMany({
        where,
        orderBy: { ruleId: 'asc' },
    });

    res.json(rule);
});

router.get('/:ruleId', async function(req, res, next){
    const { ruleId } = req.params;
    const rule = await prisma.rule.findUnique({
        where: { ruleId: BigInt(ruleId) },
    });
    res.json(rule);
});

router.put('/:ruleId', async function(req, res, next){
    const { ruleId } = req.params;
    const { name, type, stringRepresentation } = req.body;
    const rule = await prisma.rule.update({
        where: { ruleId: BigInt(ruleId) },
        data: {
            name,
            type, 
            stringRepresentation
        },
    });
    res.json(rule);
});

router.post('/', async function(req, res, next){
    const { name, type, stringRepresentation  } = req.body;
    const rule = await prisma.rule.create({
        data: {
            organizationId: BigInt(1),
            name,
            type, 
            stringRepresentation 
           
        },
    });
    res.json(rule);
});

router.delete('/:ruleId', async function(req, res, next){
    const { ruleId } = req.params;
    const rule = await prisma.rule.delete({
        where: { ruleId: BigInt(ruleId) },
    });
    res.json(rule);
});

export default router;
