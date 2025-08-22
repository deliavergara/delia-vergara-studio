-- =====================================================
-- POLÍTICAS DE SEGURIDAD PARA LECTURA PÚBLICA Y ESCRITURA AUTENTICADA
-- =====================================================

-- Habilitar RLS (Row Level Security) en todas las tablas
ALTER TABLE productos ENABLE ROW LEVEL SECURITY;
ALTER TABLE insumos ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- POLÍTICAS PARA LA TABLA 'productos'
-- =====================================================

-- Política 1: PERMITIR LECTURA PÚBLICA (cualquiera puede ver productos)
CREATE POLICY 'productos_public_read' ON productos
    FOR SELECT
    USING (true);

-- Política 2: PERMITIR ESCRITURA SOLO A USUARIOS AUTENTICADOS
CREATE POLICY 'productos_auth_insert' ON productos
    FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY 'productos_auth_update' ON productos
    FOR UPDATE
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY 'productos_auth_delete' ON productos
    FOR DELETE
    USING (auth.role() = 'authenticated');

-- =====================================================
-- POLÍTICAS PARA LA TABLA 'insumos'
-- =====================================================

-- Política 1: PERMITIR LECTURA PÚBLICA (cualquiera puede ver insumos)
CREATE POLICY 'insumos_public_read' ON insumos
    FOR SELECT
    USING (true);

-- Política 2: PERMITIR ESCRITURA SOLO A USUARIOS AUTENTICADOS
CREATE POLICY 'insumos_auth_insert' ON insumos
    FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY 'insumos_auth_update' ON insumos
    FOR UPDATE
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY 'insumos_auth_delete' ON insumos
    FOR DELETE
    USING (auth.role() = 'authenticated');

-- =====================================================
-- POLÍTICAS PARA LA VISTA 'precios_y_costos_finales'
-- =====================================================

-- Habilitar RLS en la vista
ALTER VIEW precios_y_costos_finales SET (security_invoker = true);

-- Política para la vista: SOLO LECTURA PÚBLICA (sin escritura)
CREATE POLICY 'precios_public_read' ON precios_y_costos_finales
    FOR SELECT
    USING (true);
